import React from 'react'
import Iconbar from './components/Iconbar'
import ConversationList from './components/ConversationList'
import { Grid } from '@mui/material'
import ChatWindow from './components/ChatWindow'
import UserInfoSidebar from './components/UserInfoSidebar'
function App() {

  return (
    <>
      <Grid container>
        <Grid item lg={0.53} xl={0.53} sm={0.53}>
          <Iconbar />
        </Grid>
        <Grid item lg={3} xl={3} sm={3}>
          <ConversationList />
        </Grid>
        <Grid item lg={5.5} xl={5.5} sm={5.5}>
          <ChatWindow />
        </Grid>
        <Grid item lg={2.97} xl={2.97} sm={2.97}>
          <UserInfoSidebar />
        </Grid>
      </Grid>
    </>
  )
}

export default App
