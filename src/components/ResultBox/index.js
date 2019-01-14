import React, { Fragment } from 'react';
import ResultContainer from '../../containers/resultContainer';
import Modal from '../Modal';

const Result = () => {
    return (
        <ResultContainer>
            {
                ({ result, message, resetResult }) => (
                    <Fragment>
                        {result !== '' && <Modal message={message} result={result} closeModal={resetResult}/>}
                    </Fragment>
                )
            }
        </ResultContainer>
    );
}

export default Result;