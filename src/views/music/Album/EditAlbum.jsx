import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class EditAlbum extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Edit Album</h1>
                        </div>
                    </div>


                            


                    <div className="row margin-0">
                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Basic Info</h2>
                                    
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4">Album Title</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" defaultValue="In the Ocean"/>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4">Album Artist</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" defaultValue="Hector Douglas"/>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>Album Release Date</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                                        </div>
                                                   </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Brief</Label>
                                                      <Input type="textarea" name="text" id="exampleText" defaultValue="The surgical specialties are the specialties in which an important part of diagnosis and treatmentby surgery." />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleFile">Album Image</Label>
                                                      <div className="profileimg-input"><img alt="" src={IMGDIR+"/images/music/albums/album-1.jpg"} className="img-fluid" style={{"width": "120px"}}/></div>
                                                      <Input type="file" name="file" id="exampleFile" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="input4">Website</label>
                                                        <input type="text" className="form-control" id="input4" placeholder="" defaultValue="http://seandouglas-surgeon.com" />
                                                    </div>

                                                </div>
                                                
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>



                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Social Media Info</h2>
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                            <form>
                                                <div className="form-row">
                                                    
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="input24">Facebook URL</label>
                                                        <input type="text" className="form-control" id="input24" placeholder="" defaultValue="http://facebook.com/album-intheocean" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="input241">Twitter URL</label>
                                                        <input type="text" className="form-control" id="input241" placeholder="" defaultValue="http://twitter.com/album-intheocean" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="input242">Linkedin URL</label>
                                                        <input type="text" className="form-control" id="input242" placeholder="" defaultValue="http://linkedin.com/album-intheocean" />
                                                    </div>
                                                    
                                                </div>
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>


                    </div>






                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default EditAlbum;
