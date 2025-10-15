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

                while (page <= totalPages) {
                    const res = await fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`);
                    const data = await res.json();
                    totalPages = data.pages;
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
            setValue(null);
            setInputValue('');
            navigate(`/Characters/${found.id}`);
            console.log('Character found and navigating');
        } else {
            console.log('Character not found');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const textToSearch = inputValue.trim();
            if (textToSearch) {
                handleCheckCharacter(textToSearch);
            }
        }
    };

    return (
        <div style={{
            position: 'relative',
            display: 'inline-block',
            width: '100%',
            maxWidth: '320px'
        }}>
            <div style={{
                position: 'absolute',
                inset: '-4px',
                background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.25), rgba(255, 152, 0, 0.15), rgba(255, 235, 59, 0.2))',
                borderRadius: '20px',
                filter: 'blur(12px)',
                opacity: 0.6,
                zIndex: -1,
                transition: 'opacity 0.3s ease',
            }} />

            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
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
                            <span style={{
                                fontSize: '15px',
                                fontWeight: 500,
                                color: '#2c3e50'
                            }}>
                                {option.title}
                            </span>
                        </li>
                    );
                }}
                sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255, 193, 7, 0.4)',
                        boxShadow: '0 4px 20px rgba(255, 193, 7, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        overflow: 'hidden',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                            transition: 'left 0.5s',
                        },
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            borderColor: 'rgba(255, 193, 7, 0.6)',
                            boxShadow: '0 6px 28px rgba(255, 193, 7, 0.25), 0 2px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1)',
                            transform: 'translateY(-2px)',
                            '&::before': {
                                left: '100%',
                            }
                        },
                        '&.Mui-focused': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            borderColor: '#FFC107',
                            boxShadow: '0 8px 32px rgba(255, 193, 7, 0.35), 0 0 0 4px rgba(255, 193, 7, 0.1), 0 2px 8px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 1)',
                            transform: 'translateY(-3px)',
                        },
                        '& fieldset': {
                            border: 'none',
                        }
                    },
                    '& .MuiAutocomplete-popupIndicator': {
                        color: '#FFC107',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 193, 7, 0.1)',
                            transform: 'rotate(180deg)',
                        }
                    },
                    '& .MuiAutocomplete-clearIndicator': {
                        color: '#FF9800',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 152, 0, 0.1)',
                            transform: 'rotate(90deg)',
                        }
                    },
                    '& .MuiAutocomplete-listbox': {
                        borderRadius: '14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 193, 7, 0.25)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 193, 7, 0.1)',
                        padding: '8px',
                        maxHeight: '280px',
                        '& .MuiAutocomplete-option': {
                            borderRadius: '10px',
                            margin: '3px 0',
                            padding: '10px 14px',
                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 193, 7, 0.15)',
                                transform: 'translateX(6px)',
                                boxShadow: '0 2px 8px rgba(255, 193, 7, 0.2)',
                            },
                            '&[aria-selected="true"]': {
                                backgroundColor: 'rgba(255, 193, 7, 0.25)',
                                fontWeight: 600,
                                boxShadow: '0 2px 8px rgba(255, 193, 7, 0.15)',
                            },
                            '&.Mui-focused': {
                                backgroundColor: 'rgba(255, 193, 7, 0.12)',
                            }
                        }
                    },
                    '& .MuiAutocomplete-paper': {
                        marginTop: '10px',
                        background: 'transparent',
                    },
                    '& .MuiAutocomplete-noOptions': {
                        color: '#757575',
                        padding: '16px',
                        textAlign: 'center',
                        fontStyle: 'italic',
                    }
                }}
                freeSolo
                renderInput={(params) => (
                    <TextField
                        placeholder='Buscar personaje...'
                        {...params}
                        onKeyDown={handleKeyDown}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.15), rgba(255, 152, 0, 0.1))',
                                        transition: 'all 0.3s ease',
                                    }}>
                                        <SearchIcon
                                            sx={{
                                                color: '#FFC107',
                                                fontSize: 20,
                                                filter: 'drop-shadow(0 2px 4px rgba(255, 193, 7, 0.3))',
                                            }}
                                        />
                                    </div>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiInputBase-input': {
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#2c3e50',
                                padding: '10px 12px 10px 8px !important',
                                letterSpacing: '0.3px',
                                '&::placeholder': {
                                    color: '#95a5a6',
                                    opacity: 1,
                                    fontWeight: 400,
                                }
                            },
                        }}
                    />
                )}
            />
        </div>
    );
}