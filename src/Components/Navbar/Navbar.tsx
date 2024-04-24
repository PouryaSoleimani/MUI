// ^ NAVBAR COMPONENT
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// & ICONS
import { Archive, Bot, Database, FileQuestion, FlaskConical, Gauge, LineChart, Parentheses, ScreenShare, Settings, User, UserPlus } from 'lucide-react';


const Navbar = () => {
    const drawerWidth = 220;

    return (
        <div >

            <Drawer sx={{ width: drawerWidth, height: "100%", flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', }, }} variant="permanent" anchor="left" >
                <h1 className='bg-black px-2 py-4 text-white font-bold text-2xl'>DASHBOARD</h1>
                <Divider />
                <List className='bg-zinc-800 text-white h-1/3'>
                    {['Authentication', 'Database', 'Storage', 'Hosting', 'Functions', 'Machine Learning',].map((text, index) => (
                        <ListItem key={text} disablePadding className='hover:bg-black'>
                            <ListItemButton className='flex space-x-2 font-extrabold'>
                                {index === 0 && <User strokeWidth={2.25} />}
                                {index === 1 && <Database strokeWidth={2.25} />}
                                {index === 2 && <Archive strokeWidth={2.25} />}
                                {index === 3 && <ScreenShare strokeWidth={2.25} />}
                                {index === 4 && <Parentheses strokeWidth={2.25} />}
                                {index === 5 && <Bot strokeWidth={2.25} />}
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List className='bg-zinc-800 text-white font-bold h-1/3'>
                    {['Analytics', 'Performance', 'Test Lab', 'Settings', 'Sign Up / Login', 'FAQ', 'DOCS'].map((text, index) => (
                        <ListItem key={text} disablePadding className='hover:bg-black'>
                            <ListItemButton className='flex space-x-2 font-extrabold'>
                                {index === 0 && <LineChart strokeWidth={2.25} />}
                                {index === 1 && <Gauge strokeWidth={2.25} />}
                                {index === 2 && <FlaskConical strokeWidth={2.25} />}
                                {index === 3 && <Settings strokeWidth={2.25} />}
                                {index === 4 && <UserPlus strokeWidth={2.25} />}
                                {index === 5 && <FileQuestion strokeWidth={2.25} />}
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List className='bg-zinc-800 text-white font-bold h-1/3'>
                    {['Analytics', 'Performance', 'Test Lab', 'Settings'].map((text, index) => (
                        <ListItem key={text} disablePadding className='hover:bg-black'>
                            <ListItemButton className='flex space-x-2 font-extrabold'>
                                {index === 0 && <User strokeWidth={2.25} />}
                                {index === 1 && <Database strokeWidth={2.25} />}
                                {index === 2 && <Archive strokeWidth={2.25} />}
                                {index === 3 && <ScreenShare strokeWidth={2.25} />}
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}

export default Navbar