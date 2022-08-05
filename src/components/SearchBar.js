import React, { useState } from 'react';
import '../App.css';
import { countryList } from '../resources/countryList';

const SearchBar = () => {

    const [input, updateInput] = useState('');
    const [results, setResults] = useState([]);
    const [selected, setSelected] = useState([]);

    const searchResults = results.map(country => {
        return (
            <div
                className='resultBlock'
                onClick={() => {
                    setSelected(country);
                    updateInput('');
                    setResults([]);
                }}
            >
                {country[0]}
            </div>
        )
    })

    return (
        <div className='projectDiv'>
            <h5>Search Bar</h5>
            <div className='sampleBlock searchBarBlock'>
                <input
                    className='searchBar'
                    type='text'
                    value={input}
                    onChange={e => {
                        const val = e.target.value;
                        updateInput(val);
                        if (val.length > 0) {
                            let countries = countryList.filter(country => {
                                return country[0].toLowerCase().substring(0, val.length) === val;
                            });
                            setResults(countries);
                        } else {
                            setResults([]);
                        }
                    }}
                    onFocus={() => setSelected([])}
                    placeholder='Search a country'
                />
                <div className={input.length ? 'resultsDiv' : 'hidden'}>
                    {searchResults}
                </div>
                <p className={selected.length ? 'countryData' : 'hidden'}>{selected[0]} is located in {selected[1]}</p>
            </div>
        </div>
    );
}

export default SearchBar;