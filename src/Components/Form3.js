import React from 'react'
import { Formik , Field } from 'formik';
import { Card, CardContent } from '@material-ui/core'
import { TextField } from 'formik-material-ui';
import { createMuiTheme , ThemeProvider} from '@material-ui/core/styles';
import '../App.css'
import * as Yup from 'yup';


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#76d7c4',
      }
    },
},);



const Form3 = ( {handleNext} ) => (

    
    <div>
        <Formik
            initialValues={{ school: '', collgae: '',  currentEducation: '', lastEducation: '', yearOfPass: '' }}
            validationSchema={Yup.object({
                school: Yup.string()
                  .min(10, 'Must be 10 characters or More')
                  .required('School Name is Required'),
                collage: Yup.string()
                  .min(10, 'Must be 10 characters or More')
                  .required('Collage Name is Required'),
                currentEducation: Yup.string()
                  .required('Current Education is Required'),
                lastEducation: Yup.string()
                .required('Last Education is Required'),
                yearOfPass:Yup.string()
                .required('Year of Passing is Required')
              })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext()
                }, 400);
            }}
        >
            {({
                handleSubmit,
                /* and other goodies */
            }) => (
                    <Card className="Form3-Card">
                        <CardContent className="Form3-Card-C" >
                        <h1 className="Form3-Heading">YOUR EDUCATION</h1>
                           <div>
                            <form onSubmit={handleSubmit}>
                            <ThemeProvider theme={theme}>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form3-i"
                                    type="text"
                                    name="school"
                                    label="School Name"
                                />
                                <br/>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form3-i"
                                    type="text"
                                    name="collage"
                                    label="Collage Name"
                                />
                                <br/>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form3-i"
                                    type="text"
                                    name="currentEducation"
                                    label="Current Education"
                                />
                                <br/>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form3-i"
                                    type="text"
                                    name="lastEducation"
                                    label="Last Education"
                                />
                                <br/>
                                <Field
                                    className="Form3-i"
                                    component={TextField}
                                    label="Year of Passing"
                                    type="date"
                                    name="yearOfPass"
                                    variant="outlined"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                <br />
                                </ThemeProvider>
                                {/* <button className="Form1-btn" type="submit" onClick={handleBack} >Back</button> */}
                                <button className="Form2-btn" type="submit" >SUBMIT</button>
                            </form>
                            </div>
                        </CardContent>
                    </Card>
                )
            }
        </Formik>
    </div>
);

export default Form3
