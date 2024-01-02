import { FormStyle } from "components/containers/form";
import { FormButton } from "components/buttons/formButton";
import { TextInput } from "components/inputs/textInput";
import { Label } from "components/texts/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const [ store, setStore ] = useState('')
    const [ user, setUser ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <FormStyle>
            <Label>Loja</Label>
            <TextInput placeholder="Loja" value={store} onChange={e => setStore(e.target.value)} />
            <Label>Usuario</Label>
            <TextInput placeholder="Usuario" value={user} onChange={e => setUser(e.target.value)}/>
            <Label>Senha</Label>
            <TextInput placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <FormButton>Login</FormButton>
            <FormButton>Criar Conta</FormButton>
        </FormStyle>
    )
}

export default Login;