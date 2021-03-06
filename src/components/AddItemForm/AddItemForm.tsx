import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";
import {RequestStatusType} from "../../app/app-reducer";

export type AddItemFormPropsType = {
    addItem: (title: string) => void
    entityStatus?: RequestStatusType


}

export const  AddItemForm = React.memo (function(props: AddItemFormPropsType) {

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null){
            setError(null)
        }
        if (e.key === "Enter") {addItem()}
    }
    const addItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addItem(trimmedTitle)
        } else {
            setError("Title is required!")
        }
        setTitle("")
    }

    return (
        <div>
            <TextField
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                variant={'outlined'}
                error={!!error}
                label={'Input your title'}
                helperText={error}
                disabled={props.entityStatus === 'loading'}
            />
            <IconButton color={'primary'} onClick={addItem} disabled={props.entityStatus === 'loading'}>
                <AddBox/>
            </IconButton>
        </div>
    )
})

export default AddItemForm