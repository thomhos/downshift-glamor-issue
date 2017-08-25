import glamorous from 'glamorous'

import { propStyles } from '../propstyles'

const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    padding: '0 20px',
    
    fontFamily: `'Lora', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333333',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    transition: 'background-color 300ms easein, color 300ms easein',

    ':not(:disabled)': {
        cursor: 'pointer',
    },

    '&:hover': {
        backgroundColor: '#F4F4F4',
        color: 'blue',
    },
}

const highlightedStyles = {
    backgroundColor: '#F4F4F4',
    color: 'blue',
}

export const DropdownItem = glamorous.div([
    baseStyles,
    propStyles({
        isHighlighted: highlightedStyles,
    }),
])
