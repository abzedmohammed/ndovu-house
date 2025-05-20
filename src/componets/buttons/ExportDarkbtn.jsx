import { exportUpSvg } from '../svgs';

export default function ExportDarkbtn({ text, handleClick, disabled }) {
    return (
        <button
            className='export_dark_btn'
            disabled={disabled}
            onClick={handleClick}
            type='button'>
            {exportUpSvg}
            {text}
        </button>
    );
}
