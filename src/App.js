import Input from './components/Input';
import Button from './components/Button';


import { Container, Content, Row } from './styles';

import { useState } from 'react';
/* import { ButtonContainerSum } from './components/Button/styles'; */

const App = () => {
  const [currentNumbersss, setCurrentNumbersss] = useState('0');
  const [firstNumerxxx, setFirstNumbersss] = useState('0');
  const [operationss, setOperationsss] = useState('');

  const handleOnClearsss = () => {
    setCurrentNumbersss('0')
    setFirstNumbersss('0')
    setOperationsss('')
  }

  const handleAddNumbersss = (numbersss) => {
    setCurrentNumbersss(prevsss => `${prevsss === '0' ? '' : prevsss}${numbersss}`)
  };

  const handleSumNumbersssss = () => {

    if (firstNumerxxx === '0') {
      setFirstNumbersss(String(currentNumbersss));
      setCurrentNumbersss('+')
      setOperationsss('+')

    } else {
      const sumsss = Number(firstNumerxxx) + Number(currentNumbersss);
      setCurrentNumbersss(String(sumsss));
      setOperationsss('');
    }
  }

  const handleMinNumbersssss = () => {

    if (firstNumerxxx === '0') {
      setFirstNumbersss(String(currentNumbersss));
      setCurrentNumbersss('-')
      setOperationsss('-')

    } else {
      const sumsss = Number(firstNumerxxx) - Number(currentNumbersss);
      setCurrentNumbersss(String(sumsss))
      setOperationsss('')
    }
  }

  const handleMultNumbersssss = () => {

    if (firstNumerxxx === '0') {
      setFirstNumbersss(String(currentNumbersss));
      setCurrentNumbersss(' ')
      setOperationsss('x')

    } else {
      const sumsss = Number(firstNumerxxx) * Number(currentNumbersss);
      setCurrentNumbersss(String(sumsss))
      setOperationsss('')
    }
  }

  const handleDivNumbersssss = () => {

    if (firstNumerxxx === '0') {
      setFirstNumbersss(String(currentNumbersss));
      setCurrentNumbersss(' ')
      setOperationsss('/')

    } else {
      const sumsss = Number(firstNumerxxx) / Number(currentNumbersss);
      setCurrentNumbersss(String(sumsss))
      setOperationsss('')
    }
  }

  const handleEqualsxxx = () => {

    if (firstNumerxxx !== '0' && operationss !== '' && currentNumbersss !== '') {
      switch (operationss) {
        case '+':
          handleSumNumbersssss();
          break;
        case '-':
          handleMinNumbersssss();
          break;
        case 'x':
          handleMultNumbersssss();
          break;
        case '/':
          handleDivNumbersssss();
          break;
        default:
          break;
      }
    }

  }


  return (
    <Container>
      <Content>
        <Input valuesss={currentNumbersss} />
        <Row>
          <Button label="c" onClick={handleOnClearsss} />
          <Button label="x" onClick={handleMultNumbersssss} />
          <Button label="/" onClick={handleDivNumbersssss} />
          <Button label="." onClick={() => handleAddNumbersss('.')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumbersss('7')} />
          <Button label="8" onClick={() => handleAddNumbersss('8')} />
          <Button label="9" onClick={() => handleAddNumbersss('9')} />
          <Button label="-" onClick={handleMinNumbersssss} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumbersss('4')} />
          <Button label="5" onClick={() => handleAddNumbersss('5')} />
          <Button label="6" onClick={() => handleAddNumbersss('6')} />
          <Button label="+" onClick={handleSumNumbersssss} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumbersss('1')} />
          <Button label="2" onClick={() => handleAddNumbersss('2')} />
          <Button label="3" onClick={() => handleAddNumbersss('3')} />
          <Button label="=" onClick={handleEqualsxxx} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumbersss('0')} />

        </Row>


      </Content>
    </Container>
  );
}

export default App;
