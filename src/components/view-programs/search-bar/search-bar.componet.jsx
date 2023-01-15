import { useSearchParams } from 'react-router-dom'
import Input from '../../common/input/input.component'
import './search-bar.css'

const SearchBar = () => {
    const [param, setParam] = useSearchParams()
    const updateSearchParams = (e) => {
        const tempParam = new URLSearchParams(param);
        tempParam.delete('name');
        if (e.target.value !== '')
            tempParam.set('name', e.target.value);
        setParam(tempParam)
    }

    return (
        <div className='searchBar'>
            <Input type='text' label='search by name : '
                value={param.get('name') || ''}
                onChange={updateSearchParams}
            />
        </div>
    )
}

export default SearchBar