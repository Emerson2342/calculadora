import { ButtonContainer, ButtonContainerSum } from "./styles";

const Button = ({ label, onClick }) => {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>

    );

    const ButtonSum = ({ Label, onClick }) => {
        return (
            <ButtonContainerSum onClick={onClick}>
                {label}
            </ButtonContainerSum>
        )
    }
}

export default Button;