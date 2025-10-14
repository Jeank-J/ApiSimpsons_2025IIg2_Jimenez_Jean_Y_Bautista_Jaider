import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const filter = createFilterOptions();

export default function SimpsonsAutocomplete() {

    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllCharacters = async () => {
            let allCharacters = [];
            let page = 1;
            let totalPages = 1;

            try {
                // Iterar hasta llegar a la última página
                while (page <= totalPages) {
                    const res = await fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`);
                    const data = await res.json();

                    // Guardar el total de páginas desde la primera respuesta
                    totalPages = data.pages;

                    // Mapear solo name e id
                    const mapped = data.results.map(char => ({
                        title: char.name,
                        id: char.id
                    }));

                    allCharacters = [...allCharacters, ...mapped];

                    page++;
                }

                setOptions(allCharacters);
            } catch (err) {
                console.error('Error fetching characters:', err);
            }
        };

        fetchAllCharacters();
    }, []);

    const handleCheckCharacter = (text) => {
        const found = options.find(opt => opt.title.toLowerCase() === text.toLowerCase());
        if (found) {
            setValue(null); // Limpiar el autocomplete
            setInputValue(''); // Limpiar el input
            navigate(`/Characters/${found.id}`);
            console.log('Character found and navigating');
        } else {
            console.log('Character not found');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevenir comportamiento por defecto
            const textToSearch = inputValue.trim();
            if (textToSearch) {
                handleCheckCharacter(textToSearch);
            }
        }
    };

    return (
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
                // Solo actualizar el estado, sin navegar
                if (typeof newValue === 'string') {
                    setValue({ title: newValue });
                    setInputValue(newValue);
                } else if (newValue && newValue.inputValue) {
                    setValue({ title: newValue.inputValue });
                    setInputValue(newValue.inputValue);
                } else {
                    setValue(newValue);
                    setInputValue(newValue?.title || '');
                }
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            onKeyDown={handleKeyDown}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);
                const { inputValue } = params;

                const isExisting = options.some(option => inputValue === option.title);
                if (inputValue !== '' && !isExisting) {
                    filtered.push({
                        inputValue,
                        title: `Add "${inputValue}"`,
                    });
                }

                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="simpsons-autocomplete"
            options={options}
            getOptionLabel={option => {
                if (typeof option === 'string') return option;
                if (option.inputValue) return option.inputValue;
                return option.title;
            }}
            renderOption={(props, option) => {
                const { key, ...otherProps } = props;
                return (
                    <li key={key} {...otherProps}>
                        {option.title}
                    </li>
                );
            }}
            sx={{
                width: 300,
                '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    backgroundColor: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    '&:hover': {
                        backgroundColor: '#f8f9fa',
                    },
                    '&.Mui-focused': {
                        backgroundColor: 'white',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    }
                },
                '& .MuiAutocomplete-listbox': {
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }
            }}
            freeSolo
            renderInput={(params) => (
                <TextField
                    placeholder='Search Character'
                    {...params}                    
                    onKeyDown={handleKeyDown}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon
                                    sx={{
                                        color: 'primary.main',
                                        fontSize: 24
                                    }}
                                />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: 'text.secondary',                            
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'primary.main',                            
                        }
                    }}
                />
            )}
        />
    );
}