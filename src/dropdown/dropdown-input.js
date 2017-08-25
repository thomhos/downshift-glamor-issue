import glamorous from 'glamorous'

import { propStyles } from '../propstyles'

/**
 * Styles
 */
const baseInputStyles = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    height: '60px',
    padding: '0 20px',
    width: '100%',
    maxWidth: '100%',
    outline: 'none',

    border: '1px solid black',
    borderRadius: '4px',

    fontFamily: `'Lora', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333333',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    background: `linear-gradient(#FFFFFF, #F5F3F3)`,

    '&:focus': {
        border: '1px solid blue',
    },
}

const errorStyles = {
    border: '1px solid red',
}

export const DropdownInput = glamorous.div([
    baseInputStyles,
    propStyles({
        hasError: errorStyles,
    }),
])
