// 'use client'
// import { Circle } from '@mui/icons-material'
// import { Box, Button, Container, Grid, Typography } from '@mui/material'
// import React from 'react'
// import { useRouter } from 'next/navigation'

// const Plans = () => {

//     const router = useRouter()

//     return (
//         <Box component='div' id='plans'>
//             <Box paddingTop={{ xs: '40px', sm: '50px', md: '80px' }} paddingBottom={'40px'}>
//                 <Container  >

//                     <Box >
//                         <Typography fontFamily={'roboto'} textAlign={'center'} fontWeight='bold' fontSize='35px'>
//                         Pricing
//                         </Typography>
//                         <Typography color='#757575' textAlign={'center'} fontFamily={'roboto'} fontWeight='bold' fontSize={{ xs: '14px', sm: '18px' }} >You can start with a free trial.</Typography>
//                         <Typography color='#757575' textAlign={'center'} fontFamily={'roboto'} fontWeight='bold' fontSize={{ xs: '14px', sm: '18px' }} >Or Buy the VIP Pakage</Typography>
//                         <Typography color='#757575' textAlign={'center'} fontFamily={'roboto'} fontWeight='bold' fontSize={{ xs: '14px', sm: '18px' }} >You choose.</Typography>
//                     </Box>

//                     <Grid container spacing={4} sx={{ marginTop: '15px', padding: { xs: '0 30px', sm: '0' } }}>

//                         <Grid item xs={12} sm={6} md={4} lg={3}>
                           
//                                 <Box
//                                     sx={{
//                                         backgroundColor: 'white',
//                                         boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//                                         padding: '22px 22px',
//                                         borderRadius: '12px',
//                                         transition: 'all 0.6s ease-in-out',
//                                         '&:hover': {
//                                             transform: 'scale(1.1)'
//                                         }
//                                     }}
//                                 >
//                                     <Box display='flex' justifyContent={'space-between'} gap='20px' alignItems={'baseline'}>
//                                     <Typography fontWeight='bold' color='green' fontSize='25px'>Free</Typography>
//                                         <Box display='flex' alignItems={'baseline'}>
//                                             <Typography fontSize={'18px'} color='green' fontWeight={'bold'}>$0</Typography>
//                                         </Box>
//                                     </Box>
//                                     <Typography color='#757575' textAlign={'center'} fontSize={'13px'} paddingTop='10px' paddingBottom={'25px'} borderBottom={'1px solid #bdbdbd'}>The perfect solution to try it out</Typography>
//                                     <Box padding={'16px 5px'} borderBottom={'1px solid #bdbdbd'}>

//                                         <Box display={'flex'} justifyContent='space-between' alignItems='baseline'>
//                                             <Typography fontWeight={'bold'} color='#616161' fontSize='13px'>Number of days</Typography>
//                                             <Typography fontWeight={'bold'} fontSize='15px'>1</Typography>
//                                         </Box>
//                                         <Box display={'flex'} justifyContent='space-between' alignItems='baseline'>
//                                             <Typography fontWeight={'bold'} color='#616161' fontSize='13px'>Number of videos</Typography>
//                                             <Typography fontWeight={'bold'} fontSize='15px'>1</Typography>
//                                         </Box>
//                                         <Box display={'flex'} justifyContent='space-between' alignItems='baseline'>
//                                             <Typography fontWeight={'bold'} color='#616161' fontSize='13px'>Stream duration </Typography>
//                                             <Typography fontWeight={'bold'} fontSize='15px'>24/7</Typography>
//                                         </Box>
//                                     </Box>

//                                     <Box marginTop='15px'>
//                                         <Box display='flex' alignItems='center' gap='15px'>
//                                             <Circle sx={{ fontSize: '10px', color: '#d32f2f' }} />
//                                             <Typography color='#9e9e9e' fontWeight={'bold'} fontSize={'13px'}>Support service in your online account</Typography>
//                                         </Box>
//                                         <Box display='flex' alignItems='center' gap='15px' marginTop='5px'>
//                                             <Circle sx={{ fontSize: '10px', color: '#d32f2f' }} />
//                                             <Typography color='#9e9e9e' fontWeight={'bold'} fontSize={'13px'}>Video tutorial for a successful start</Typography>
//                                         </Box>
//                                     </Box>
//                                     <Button
//                                         variant="outlined"
//                                         sx={{
//                                             textTransform: 'none',
//                                             width: '100%',
//                                             borderColor: 'black',
//                                             borderRadius: '24px',
//                                             marginTop: '30px',
//                                             marginBottom: '10px',
//                                             color: 'black',
//                                             fontSize: '17px',
//                                             transition: 'all 0.4s ease-in-out',
//                                             '&:hover': {
//                                                 backgroundColor: '#1F51FF',
//                                                 color: 'white'
//                                             }
//                                         }}
//                                         onClick={() => router.push('/login')}
//                                     >Start Free Trial
//                                     </Button>
//                                 </Box>
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={4} lg={3}>
                           
//                                 <Box
//                                     sx={{
//                                         backgroundColor: 'white',
//                                         boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//                                         padding: '22px 22px',
//                                         borderRadius: '12px',
//                                         transition: 'all 0.6s ease-in-out',
//                                         '&:hover': {
//                                             transform: 'scale(1.1)'
//                                         }
//                                     }}
//                                 >
//                                     <Box display='flex' justifyContent={'space-between'} gap='20px' alignItems={'baseline'}>
//                                         <Typography fontWeight='bold' color='green' fontSize='25px'>Premium</Typography>
//                                         <Box display='flex' alignItems={'baseline'}>
//                                             <Typography fontSize={'18px'} color='green' fontWeight={'bold'}>$49/Month</Typography>
//                                         </Box>
//                                     </Box>
//                                     <Typography color='#757575' textAlign={'center'} fontSize={'13px'} paddingTop='10px' paddingBottom={'25px'} borderBottom={'1px solid #bdbdbd'}>The perfect solution to try it out</Typography>
//                                     <Box padding={'16px 5px'} borderBottom={'1px solid #bdbdbd'}>

//                                         <Box display={'flex'} justifyContent='space-between' alignItems='baseline'>
//                                             <Typography fontWeight={'bold'} color='#616161' fontSize='13px'>Number of days</Typography>
//                                             <Typography fontWeight={'bold'} fontSize='15px'>1</Typography>
//                                         </Box>
//                                         <Box display={'flex'} justifyContent='space-between' alignItems='baseline'>
//                                             <Typography fontWeight={'bold'} color='#616161' fontSize='13px'>Number of videos</Typography>
//                                             <Typography fontWeight={'bold'} fontSize='15px'>1</Typography>
//                                         </Box>
//                                         <Box display={'flex'} justifyContent='space-between' alignItems='baseline'>
//                                             <Typography fontWeight={'bold'} color='#616161' fontSize='13px'>Stream duration </Typography>
//                                             <Typography fontWeight={'bold'} fontSize='15px'>24/7</Typography>
//                                         </Box>
//                                     </Box>

//                                     <Box marginTop='15px'>
//                                         <Box display='flex' alignItems='center' gap='15px'>
//                                             <Circle sx={{ fontSize: '10px', color: '#d32f2f' }} />
//                                             <Typography color='#9e9e9e' fontWeight={'bold'} fontSize={'13px'}>Support service in your online account</Typography>
//                                         </Box>
//                                         <Box display='flex' alignItems='center' gap='15px' marginTop='5px'>
//                                             <Circle sx={{ fontSize: '10px', color: '#d32f2f' }} />
//                                             <Typography color='#9e9e9e' fontWeight={'bold'} fontSize={'13px'}>Video tutorial for a successful start</Typography>
//                                         </Box>
//                                     </Box>
//                                     <Button
//                                         variant="outlined"
//                                         sx={{
//                                             textTransform: 'none',
//                                             width: '100%',
//                                             borderColor: 'black',
//                                             borderRadius: '24px',
//                                             marginTop: '30px',
//                                             marginBottom: '10px',
//                                             color: 'black',
//                                             fontSize: '17px',
//                                             transition: 'all 0.4s ease-in-out',
//                                             '&:hover': {
//                                                 backgroundColor: 'green',
//                                                 color: 'white'
//                                             }
//                                         }}
//                                         onClick={() => router.push('/login')}
//                                     >Buy now
//                                     </Button>
//                                 </Box>
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={4} lg={3}>
                            
//                                 <Box
//                                     sx={{
//                                         backgroundColor: 'white',
//                                         boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//                                         padding: '22px 22px',
//                                         borderRadius: '12px',
//                                         transition: 'all 0.6s ease-in-out',
//                                         '&:hover': {
//                                             transform: 'scale(1.1)'
//                                         }
//                                     }}
//                                 >
//                                     <Box display='flex' justifyContent={'space-between'} gap='20px' alignItems={'baseline'}>
//                                     <Typography fontWeight='bold' color='green' fontSize='25px'>VIP</Typography>
//                                         <Box display='flex' alignItems={'baseline'}>
//                                             <Typography fontSize={'18px'} color='green' fontWeight={'bold'}>$99/Month</Typography>
//                                         </Box>
//                                     </Box>
//                                     <Typography color='#757575' textAlign={'center'} fontSize={'13px'} paddingTop='10px' paddingBottom={'25px'} borderBottom={'1px solid #bdbdbd'}>The perfect solution to try it out</Typography>
//                                     <Box padding={'16px 5px'} borderBottom={'1px solid #bdbdbd'}>

//                                         <Box display={'flex'} justifyContent='space-between' alignItems='baseline'>
//                                             <Typography fontWeight={'bold'} color='#616161' fontSize='13px'>Number of days</Typography>
//                                             <Typography fontWeight={'bold'} fontSize='15px'>7</Typography>
//                                         </Box>
//                                         <Box display={'flex'} justifyContent='space-between' alignItems='baseline'>
//                                             <Typography fontWeight={'bold'} color='#616161' fontSize='13px'>Number of videos</Typography>
//                                             <Typography fontWeight={'bold'} fontSize='15px'>2</Typography>
//                                         </Box>
//                                         <Box display={'flex'} justifyContent='space-between' alignItems='baseline'>
//                                             <Typography fontWeight={'bold'} color='#616161' fontSize='13px'>Stream duration </Typography>
//                                             <Typography fontWeight={'bold'} fontSize='15px'>24/7</Typography>
//                                         </Box>
//                                     </Box>

//                                     <Box marginTop='15px'>
//                                         <Box display='flex' alignItems='center' gap='15px'>
//                                             <Circle sx={{ fontSize: '10px', color: '#d32f2f' }} />
//                                             <Typography color='#9e9e9e' fontWeight={'bold'} fontSize={'13px'}>Support service in your online account</Typography>
//                                         </Box>
//                                         <Box display='flex' alignItems='center' gap='15px' marginTop='5px'>
//                                             <Circle sx={{ fontSize: '10px', color: '#d32f2f' }} />
//                                             <Typography color='#9e9e9e' fontWeight={'bold'} fontSize={'13px'}>Video tutorial for a successful start</Typography>
//                                         </Box>
//                                     </Box>
//                                     <Button
//                                         variant="outlined"
//                                         sx={{
//                                             textTransform: 'none',
//                                             width: '100%',
//                                             borderColor: 'black',
//                                             borderRadius: '24px',
//                                             marginTop: '30px',
//                                             marginBottom: '10px',
//                                             color: 'black',
//                                             fontSize: '17px',
//                                             transition: 'all 0.4s ease-in-out',
//                                             '&:hover': {
//                                                 backgroundColor: 'green',
//                                                 color: 'white'
//                                             }
//                                         }}
//                                         onClick={() => router.push('/login')}
//                                     >Buy now
//                                     </Button>
//                                 </Box>
//                         </Grid>
                        

//                     </Grid>

//                 </Container>
//             </Box>
//         </Box>
//     )
// }

// export default Plans