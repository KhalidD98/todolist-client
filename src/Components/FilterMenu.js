import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function FilterMenu({ filterList }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const filterCompleted = () => {
        filterList('completed')
        handleClose()
    }
    const filterPending = () => {
        filterList('pending')
        handleClose()
    }
    const filterAll = () => {
        filterList('all')
        handleClose()
    }
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Filter
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={filterAll}>Show All</MenuItem>
                <MenuItem onClick={filterPending}>Show Pending</MenuItem>
                <MenuItem onClick={filterCompleted}>Show Completed</MenuItem>
            </Menu>
        </div>
    )
}