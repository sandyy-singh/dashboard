import React from "react";
// import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
export default function UpperNav() {
    return (
        <div className="navbar">
            <div>

                <Button sx={{
                    borderRadius: 20,
                }}><SearchIcon color="action" /></Button>

            </div>
            <div >
                {/* <ButtonGroup variant="text" aria-label="text button group"> */}
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>Three</Button>
                <Button>Three</Button>
                {/* </ButtonGroup> */}
            </div>


        </div>
    )
}