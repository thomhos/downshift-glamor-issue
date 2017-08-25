import Downshift from 'downshift'
import glamorous from 'glamorous'
import React from 'react'

import { DropdownInput } from './dropdown-input'
import { DropdownItem } from './dropdown-item'
import { DropdownList } from './dropdown-list'

const Div = glamorous.div({
    position: 'relative',
})

export const Dropdown = (props) => {
    const { options, label, onChange } = props

    return (
        <Downshift onChange={onChange}>
            {({
                getButtonProps,
                getItemProps,
                getRootProps,
                highlightedIndex,
                isOpen,
                selectedItem,
            }) => (
                <Div {...getRootProps({ refKey: 'innerRef' })}>
                    <DropdownInput tabIndex={0} {...getButtonProps()} noMargin>
                        <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{selectedItem || label}</span>
                    </DropdownInput>
                    <DropdownList isOpen={isOpen}>
                        {options.map((item, index) => (
                            <DropdownItem
                                key={index}
                                {...getItemProps({
                                    item,
                                    index,
                                    isHighlighted: highlightedIndex === index,
                                })}
                            >
                                {item}
                            </DropdownItem>
                        ))}
                    </DropdownList>
                </Div>
            )}
        </Downshift>
    )
}
