import React from 'react'
import { Formik , Field } from 'formik';
import { Card, CardContent  } from '@material-ui/core'
import { TextField } from 'formik-material-ui';
import { createMuiTheme , ThemeProvider} from '@material-ui/core/styles';
import '../App.css'
import * as Yup from 'yup';

const phoneRegExp =  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#76d7c4',
      }
    },
},);


const Form1 = ( { handleNext } ) => (

    <div>
        <Formik
            initialValues={{ firstname: '', lastname: '',  email: '', phone: '', birthday: '', age: '' }}
            validationSchema={Yup.object({
                firstname: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('First Name is Required'),
                lastname: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Last Name is Required'),
                phone: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .min(8)
                .required('Phone Number is required'),
                email: Yup.string().email()
                  .required('Email is Required'),
                age: Yup.string()
                  .required('Age is Required')
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
                    <Card className="Form1-Card">
                        <CardContent className="Form1-Card-C" >
                        <h1 className="Form1-Heading">PERSONAL DETAILS</h1>
                           <div>
                            <form onSubmit={handleSubmit}>
                            <ThemeProvider theme={theme}>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form1-i"
                                    type="text"
                                    name="firstname"
                                    label="First Name"
                                    color="yellow"
                                />
                                <br/>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form1-i"
                                    type="text"
                                    name="lastname"
                                    label="Last Name"
                                />
                                <br/>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form1-i"
                                    type="email"
                                    name="email"
                                    label="Email"
                                />
                                <br/>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form1-i"
                                    type="text"
                                    name="phone"
                                    label="Phone Number"
                                />
                                <br/>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form1-i"
                                    type="number"
                                    name="age"
                                    label="Age"
                                />
                                <br/>
                                <Field
                                    className="Form1-i"
                                    component={TextField}
                                    label="date Of Birth"
                                    type="date"
                                    name="Birthday"
                                    variant="outlined"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                <br/>

                                </ThemeProvider>
                                <button className="Form1-btn" type="submit" >Next</button>
                            </form>
                            </div>
                        </CardContent>
                    </Card>
                )
            }
        </Formik>
    </div>
);

export default Form1
