import React from 'react'
import './Footer.css'
import HeartIcon from '@mui/icons-material/FavoriteOutlined';
import HateIcon from '@mui/icons-material/CloseOutlined';
import ExitIcon from '@mui/icons-material/ExitToAppOutlined';
import RedoIcon from '@mui/icons-material/ReplayOutlined';
import { Icon, IconButton } from '@mui/material';
import TinderCard from 'react-tinder-card'


function Footer() {
  return (
    <div>
{/* footer-btn-left */}
<TinderCard  className='bottomButtons'>
    <IconButton >
        <RedoIcon className='replay' fontSize='large'/>
    </IconButton>

    <IconButton >
        <HateIcon className='hate' fontSize='large'/>
    </IconButton>

    <IconButton>
        <ExitIcon className='exit' fontSize='large' />
    </IconButton>

    <IconButton>
        <HeartIcon className='heart' fontSize='large'/>
    </IconButton>

</TinderCard>
    </div>
  )
}

export default Footer;
