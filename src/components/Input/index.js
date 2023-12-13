import { InputContainer } from './styles';

const Input = ({ valuesss }) => {
    return (
        <InputContainer>
            <input disabled value={valuesss}></input>
        </InputContainer>
    );
}

export default Input;