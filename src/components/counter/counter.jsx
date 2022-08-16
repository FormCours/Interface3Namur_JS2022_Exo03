import { useCounter } from '../../hooks/counter-hook';

const Counter = ({ incr }) => {

    const [count, handleIncrement, handleReset] = useCounter(0, incr);

    return (
        <>
            <p>Valeur du compteur {count}</p>
            <button onClick={handleIncrement}> +{incr} </button>
            <br />
            {count > 0 && (
                <button onClick={handleReset} > Reset </button>
            )}
        </>
    );
};

Counter.defaultProps = {
    incr: 1
};

export default Counter;