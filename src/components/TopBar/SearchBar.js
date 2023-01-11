import { SearchBarTop } from "./style";
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { getSearchUsers } from "../../service/Service";
import UserOption from "./UserOption";

export default function SearchBar({ screen }) {

    const [search, setSearch] = useState('')
    const [usersGot, setUsersGot] = useState([])

    function handleSearch(e) {

        setSearch(e.target.value)

        if (e.target.value.length < 3) {
            setUsersGot([])
            return
        }

        getSearchUsers('search-users', e.target.value).then(e => {

            setUsersGot(e.data)

        }).catch(e => console.log(e))
    }

    return (

        <SearchBarTop  screen={screen} onSubmit={(e) => e.preventDefault()}>
            <footer>
                <DebounceInput placeholder='Search people' value={search} minLength={2} debounceTimeout={300} onChange={handleSearch} list="users" />
                <button type='submit'>{<AiOutlineSearch />} </button>
            </footer>
            <ul onBlur={()=>setUsersGot([])}>
                {usersGot.map((e) => <UserOption key={e.id} data={e} setUsersGot={setUsersGot} setSearch={setSearch} />)}
            </ul>
        </SearchBarTop>
    );
}