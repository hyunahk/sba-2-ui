import React, {useState} from 'react'
import uuid from 'uuid/v4'
import {useDispatch} from 'react-redux'
import {addTodoAction} from '../store/todoReducer'

const TodoInput = () => {
    //todo 가 CRUD 대상(object)입니다. -> 속성이 된다
    // es6 이전 모드 var
    // es6 이후 let, const 두가지로 정의 변수, 상수
    // 함수는 const 타입에 할당합니다.
    // JSON = Javascript Object Notation
    // obejct {a : 4, b}, array[]

    const [todo, setTodo] = useState('') //todo의 타입결정함
    const dispatch = useDispatch()
    const submitForm = e => {
        e.preventDefault() // default 기능을 막고, 내가 정의한 기능을 구현하라
        const newTodo = {
            todoId: uuid(),
            name: todo,
            complete: false
        }
        addTodo(newTodo)
        setTodo("")
        document.getElementById('input').value = ''
    }
    const handleChange = e => {
        e.preventDefault()
        setTodo(e.target.value)
    }
    const addTodo = todo => {
        dispatch(addTodoAction(todo)) // 영속적으로 저장할 곳 state -> api -> db
    }

    return <>
    <h1>할일 등록</h1>
    <form onSubmit={submitForm} method='POST'>
        <div>
            <input type="text" name="todo" id="input" onCharge={handleChange}/><br/>
            <input type="submit" value="ADD TODO"/>
        </div>
    </form>
    </>
}
export default TodoInput