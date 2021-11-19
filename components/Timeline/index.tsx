import { FaLaptopCode, FaUniversity } from "react-icons/fa";
import { Paper, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, Timeline as TimelineMaterialUI, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';

export interface TimelineComponentProps {
    
}

const useStyles = makeStyles((theme) => ({
    widthContainer: {        
        maxWidth: '1000px',
        cursor: 'pointer',         
    },
    paper: {
        margin: '0px 0px 15px 0px',
        padding: '5px',
    },
    papers: {
        margin: '0px 2px 15px 0px',
        padding: '5px',
      },
    palette: {
        primary: {
            main: '#5fef7c',
        },
        secondary: {
            main: '#de5e78',
        },
    },
    primaryTail: {
        transition: 'all .2s ease-out',
        '&:hover .bgCard': {
            boxShadow: '0 0 3px 1px #5fef7c',
            transition: 'all .25s ease-in',
        },
        '&:hover .timeConector': {
            borderColor: '#5fef7c',
            color: '#5fef7c',
            transition: 'all .25s ease-in',
         },
        '&:hover .timeBg': {
            backgroundColor: '#5fef7c',
            transition: 'all .25s ease-in',
        },      
    },
    secondaryTail: {
        transition: 'all .2s ease-out',
        '&:hover .bgCard': {
            boxShadow: '0 0 3px 1px #de5e78',
            transition: 'all .25s ease-in',
        },
        '&:hover .timeConector': {
            borderColor: '#de5e78',
            color: '#de5e78',
            transition: 'all .25s ease-in',
         },
        '&:hover .timeBg': {
            backgroundColor: '#de5e78',
            transition: 'all .25s ease-in',
        },    
    },
  }));

const TimelineComponent: React.FC<TimelineComponentProps> = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const classes = useStyles();

    return (
        <>
            <h2 id='History' className='titleMargin mb-3 d-flex justify-content-center sectionPadding'>History</h2>
            <h4 className='mb-4 text-center'>Studies and IT experience</h4>
            <div className={matches ? `mx-auto ${classes.widthContainer}` : `d-flex justify-content-center ${classes.widthContainer}`}>
                <TimelineMaterialUI align={matches ? 'alternate' : 'left'}>
                    <TimelineItem className={classes.primaryTail}>
                        <TimelineOppositeContent>
                            <h5 className='pt-lg-2'>May - 2015</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className='timeConector' variant="outlined">
                                <FaUniversity size='1.5em' />
                            </TimelineDot>
                            <TimelineConnector className='timeBg' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={24} className={`bgCard white ${classes.paper}`}>
                                <h5>Bachelor of Marketing</h5>
                                <p>FASTA University</p>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className={classes.primaryTail}>
                        <TimelineOppositeContent>
                            <h5 className='pt-lg-2'>Sep - 2017</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className='timeConector' variant="outlined">
                                <FaUniversity size='1.5em' />
                            </TimelineDot>
                            <TimelineConnector className='timeBg' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={24} className={`bgCard white ${classes.papers}`}>
                                <h5>Certificate III in Information, Digital Media and Technology</h5>
                                <p>ACIT IFTV College</p>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className={classes.primaryTail}>
                        <TimelineOppositeContent>
                            <h5 className='pt-lg-2'>Nov - 2018</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className='timeConector' variant="outlined">
                                <FaUniversity size='1.5em' />
                            </TimelineDot>
                            <TimelineConnector className='timeBg' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={24} className={`bgCard white ${classes.paper}`}>
                                <h5>Certificate IV in Information, Digital Media Technologies</h5>
                                <p>ACIT IFTV College</p>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className={classes.primaryTail}>
                        <TimelineOppositeContent>
                            <h5 className='pt-lg-2'>Dec - 2019</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className='timeConector' variant="outlined">
                                <FaUniversity size='1.5em' />
                            </TimelineDot>
                            <TimelineConnector className='timeBg' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={24} className={`bgCard white ${classes.papers}`}>
                                <h5>Diploma of Leadership & Management</h5>
                                <p>Entrepreneur Education</p>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className={classes.secondaryTail}>
                        <TimelineOppositeContent>
                            <h5 className='pt-lg-2'>2019 to present</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" className='timeConector'>
                                <FaLaptopCode size='1.5em' />
                            </TimelineDot>
                            <TimelineConnector className='timeBg' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={24} className={`bgCard white ${classes.paper}`}>
                                <h5>Freelance Web developer</h5>
                                <p>Working on a range of freelance web projects using HTML5, CSS3, SASS, Bootstrap, EmailJS, JavaScript, TypeScript, React.js, Redux or Next.js according to the needs of each client.</p>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className={classes.primaryTail}>
                        <TimelineOppositeContent>
                            <h5 className='pt-lg-2'>May - 2020</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className='timeConector' variant="outlined">
                                <FaUniversity size='1.5em' />
                            </TimelineDot>
                            <TimelineConnector className='timeBg' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={24} className={`bgCard white ${classes.papers}`}>
                                <h5>Full Stack for Web Developers Course</h5>
                                <p>COURSERA</p>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className={classes.primaryTail}>
                        <TimelineOppositeContent>
                            <h5 className='pt-lg-2'>Aug - 2020</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className='timeConector' variant="outlined">
                                <FaUniversity size='1.5em' />
                            </TimelineDot>
                            <TimelineConnector className='timeBg' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={24} className={`bgCard white ${classes.paper}`}>
                                <h5>Vanilla JavaScript Course</h5>
                                <p>CoderHouse</p>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className={classes.primaryTail}>
                        <TimelineOppositeContent>
                            <h5 className='pt-lg-2'>Oct- 2020</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className='timeConector' variant="outlined">
                                <FaUniversity size='1.5em' />
                            </TimelineDot>
                            <TimelineConnector className='timeBg' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={24} className={`bgCard white ${classes.papers}`}>
                                <h5>React JS Course</h5>
                                <p>CoderHouse</p>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className={classes.secondaryTail}>
                        <TimelineOppositeContent>
                            <h5 className='pt-lg-2'>Mar - 2021 / Jun -2021</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" className='timeConector'>
                                <FaLaptopCode size='1.5em' />
                            </TimelineDot>
                            <TimelineConnector className='timeBg' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={24} className={`bgCard white ${classes.paper}`}>
                                <h5>Freelance Front End Developer</h5>
                                <h6>JCI Argentina</h6>
                                <p>Freelance Front End Developer at JCI Argentina using React.js as a main framework</p>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className={classes.primaryTail}>
                        <TimelineOppositeContent>
                            <h5 className='pt-lg-2'>Mar - 2021</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className='timeConector' variant="outlined">
                                <FaUniversity size='1.5em' />
                            </TimelineDot>
                            <TimelineConnector className='timeBg' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={24} className={`bgCard white ${classes.papers}`}>
                                <h5>UX UI Design Course</h5>
                                <p>CoderHouse</p>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className={classes.primaryTail}>
                        <TimelineOppositeContent>
                            <h5 className='pt-lg-2'>Oct - 2021</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className='timeConector' variant="outlined">
                                <FaUniversity size='1.5em' />
                            </TimelineDot>
                            <TimelineConnector className='timeBg' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={24} className={`bgCard white ${classes.papers}`}>
                                <h5>React Native with Expo Course</h5>
                                <p>CoderHouse</p>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className={classes.secondaryTail}>
                        <TimelineOppositeContent>
                            <h5 className='pt-lg-2'>May - 2021 to present</h5>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" className='timeConector'>
                                <FaLaptopCode size='1.5em' />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={24} className={`bgCard white ${classes.paper}`}>
                                <h5>Freelance Web Developer</h5>
                                <h6>Revolution Creative Group</h6>
                                <p>Development of websites using Wordpress and customize CSS and JavaScript</p>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </TimelineMaterialUI>
            </div>
        </>
    );
}
 
export default TimelineComponent;