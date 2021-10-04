import React from 'react';
import MyInput from "../../UI/input/MuInput";
import MySelect from "../../UI/select/mySelect";

function PostFilter({filter, setFilter}) {
    return <div>
        <MyInput
            value={filter.query}
            onChange={(event) => setFilter({...filter, query: event.target.value})}
            type="text"
            placeholder="Search..."
        />

        <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Сортировка"
            options={[
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
            ]}
        />
    </div>
}

export default PostFilter;