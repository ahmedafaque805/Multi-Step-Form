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



const Form2 = ( { handleNext } ) => (

    
    <div>
        <Formik
            initialValues={{ address1: '', address2: '',  city: '', state: '', zip: '', country: '' }}
            validationSchema={Yup.object({
                address1: Yup.string()
                  .min(15, 'Must be 15 characters or More')
                  .required('First Name is Required'),
                city: Yup.string()
                  .required('City is Required'),
                state: Yup.string()
                  .required('State/Province is Required'),
                zip: Yup.string()
                .required('Zip/Postal Code is Required'),
                country:Yup.string()
                .required('Country is Required')
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
                    <Card className="Form2-Card">
                        <CardContent className="Form2-Card-C" >
                        <h1 className="Form2-Heading">YOUR ADDRESS</h1>
                           <div>
                            <form onSubmit={handleSubmit}>
                            <ThemeProvider theme={theme}>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form2-i"
                                    type="text"
                                    name="address1"
                                    label="Address Line 1"
                                    color="yellow"
                                />
                                <br/>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form2-i"
                                    type="text"
                                    name="address2"
                                    label="Address line 2"
                                />
                                <br/>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form2-i"
                                    type="text"
                                    name="city"
                                    label="City"
                                />
                                <br/>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form2-i"
                                    type="text"
                                    name="state"
                                    label="State/Province"
                                />
                                <br/>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form2-i"
                                    type="text"
                                    name="zip"
                                    label="ZIP/Postal Code"
                                />
                                <br/>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    className="Form2-i"
                                    type="text"
                                    name="country"
                                    label="Country"
                                />
                                <br />
                                </ThemeProvider>
                                <button className="Form2-btn" type="submit" >Next</button>
                            </form>
                            </div>
                            </CardContent>
                    </Card>
                )
            }
        </Formik>
    </div>
);

export default Form2
