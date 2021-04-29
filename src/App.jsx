import React, {useEffect, useState} from "react";
import './App.scss';
import Input from "./components/BS/Input";
import Form from "./components/BS/Form";
import Checkbox from "./components/BS/Checkbox";
import Button from "./components/BS/Button";
import Fieldset from "./components/BS/Fieldset";
import ColorPicker from "./components/BS/ColorPicker";
import DataList from "./components/BS/DataList";
import Container from "./components/BS/Layout/Container";
import Row from "./components/BS/Layout/Row";
import Col from "./components/BS/Layout/Col";
import Select from "./components/BS/Forms/Select";

function App() {
    const [data, setData] = useState({
        email: '',
        password: '',
        color: localStorage.getItem('bg-color') || '#ffffff'
    })
    const [users, setUsers] = useState([])

    const changeHandler = (key, val) => {
        setData({...data, [key]: val})
    }

    const addUserHandler = e => {
        e.preventDefault()

        const arr = []
        if (data.email)
            arr.push(data.email)

        for (let str of users){
            if (!arr.includes(str))
                arr.push(str)
        }

        setUsers([...arr])
    }

    useEffect(() => {
        const fetchUsers = async () => {
            let result = await fetch('http://www.filltext.com/?rows=100&fname={firstName}&lname={lastName}&pretty=true')
            let data = await result.json()
            setUsers(data.map(r => r.lname + ' '+r.fname))
        }
        fetchUsers()
    }, [])

    useEffect(() => {
        localStorage.setItem('bg-color', data.color)
    }, [data])

    return (
        <Container>
            <Form style={{backgroundColor: data.color}}>
                <Fieldset legend="Disabled fieldset example">
                    <div className="mb-3">
                        <Input type="text"
                               placeholder="Имя"
                               label="Имя"
                               help="Мы никому его не расскажем ))"
                               value={data.email}
                               onChange={e => changeHandler('email', e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <Input label="Password" type="password"
                               help="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."
                               value={data.password}
                               onChange={e => changeHandler('password', e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <Checkbox label="Check me out"/>
                    </div>

                    <Row gapY={3}>
                        {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'].map((val, index) =>
                            <Col>
                                <Button key={index} text="Добавить" variant={val} onClick={addUserHandler}/>
                            </Col>
                        )}
                    </Row>
                </Fieldset>

                <Row>
                    <Col>
                        <Input type="text" placeholder=".form-control-lg" size="lg" onChange={()=>{}}/>
                    </Col>
                    <Col>
                        <Input type="text" placeholder="Default input" disabled onChange={()=>{}}/>
                    </Col>
                    <Col>
                        <Input type="text" placeholder=".form-control-sm" size="sm" onChange={()=>{}}/>
                    </Col>
                </Row>

                <ColorPicker label="Выберите цвет" value={data.color} onChange={e => changeHandler('color', e.target.value)}/>

                <DataList label="Имена" placeholder="Начните вводить имя..." datalist={users} />

                <Fieldset legend="Selects">
                    <Select options={users.sort((a, b) => a > b ? 1 : -1).map(u => ({value: u, label: u}))}
                            label="Default"/>

                    <Select options={users.sort((a, b) => a > b ? 1 : -1).map(u => ({value: u, label: u}))}
                            label="Small" sizeVariant="sm"/>

                    <Select options={users.sort((a, b) => a > b ? 1 : -1).map(u => ({value: u, label: u}))}
                            label="Large" sizeVariant="lg"/>

                    <Select options={users.sort((a, b) => a > b ? 1 : -1).map(u => ({value: u, label: u}))}
                            label="Multiple" multiple/>

                    <Select options={users.sort((a, b) => a > b ? 1 : -1).map(u => ({value: u, label: u}))}
                            label="Multiple with size" multiple size={20}/>

                    <Select options={users.sort((a, b) => a > b ? 1 : -1).map(u => ({value: u, label: u}))}
                            label="Disabled" disabled/>
                </Fieldset>

            </Form>
        </Container>
    );
}

export default App;
