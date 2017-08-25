import glamorous from 'glamorous'

import { propStyles } from '../propstyles'


const baseStyles = {
    position: 'absolute',
    top: 'calc( 100% + 5px )',
    left: 0,
    width: '100%',

    background: 'white',
    zIndex: 10,
    boxShadow: '0px 4px 20px 0px rgba(0,0,0,0.09)',

    transition: 'visibility 0ms linear 100ms, opacity 100ms linear',
    opacity: 0,
    visibility: 'hidden',
}

const openStyles = {
    visibility: 'visible',
    opacity: 1,
    transitionDelay: '0ms',
}

export const DropdownList = glamorous.div([
    baseStyles,
    propStyles({
        isOpen: openStyles,
    }),
])
