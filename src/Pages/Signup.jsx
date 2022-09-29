import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

export default function Signup() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState(false);
    const [load, setLoad] = useState(false);
    const {token,handleToken}=useContext(AuthContext);

    const handleChange = (e) => {
        const { value, name } = e.target;
        // console.log(name,value)
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = () => {
        // console.log(form)
        setLoad(true)
        axios.post("https://reqres.in/api/login", form)
            .then((res) => {
                console.log(res.data.token);
                handleToken(res.data.token)
            })
            .catch((error) => {
                console.log(error);
                setError(true)
                setLoad(false)
            })
    }

    console.log(token)
    if(token!=null)
    {
        return <Navigate to="/"/>
    }

    if (error) {
        return (
            <Alert w="70%" m="20px auto" status='error'>
                <AlertIcon />
                <AlertTitle>Something is Wrong !</AlertTitle>
                <AlertDescription>Please Refresh</AlertDescription>
            </Alert>
        )
    }

    return (
        <>
            <FormControl w={{ base: "90%", sm: "50%" }} m="20px auto">
                <FormLabel>Email address</FormLabel>
                <Input type='email' name="email" value={form.email} onChange={handleChange} />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormLabel>Password</FormLabel>
                <Input type='password' name="password" value={form.password} onChange={handleChange} />
                <FormHelperText>We'll never share your password.</FormHelperText>
                <Button disabled={load} colorScheme='red' onClick={handleSubmit}>Submit</Button>
            </FormControl>
        </>
    )
};
