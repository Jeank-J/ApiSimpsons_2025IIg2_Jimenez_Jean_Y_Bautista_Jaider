import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function SimpsonsAutocomplete() {
    const [value, setValue] = useState(null);
    const [options, setOptions] = useState([]);

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
            console.log('in the brr');
        }
    };

    return (
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
                let SelecText;
                if (typeof newValue === 'string') {
                    SelecText = newValue;
                    setValue({ title: newValue });
                } else if (newValue && newValue.inputValue) {
                    SelecText = newValue.inputValue;
                    setValue({ title: newValue.inputValue });
                } else {
                    SelecText = newValue?.title || '';
                    setValue(newValue);
                }
                console.log(SelecText)
                handleCheckCharacter(SelecText);
            }}
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
            sx={{ width: 300 }}
            freeSolo
            renderInput={(params) => <TextField {...params} label="Buscar personaje de Los Simpsons" />}
        />
    );
}
