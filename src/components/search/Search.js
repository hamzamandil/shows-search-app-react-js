import React, {useState, useContext, useEffect} from 'react';
import { withRouter } from 'react-router';

import Homebg from "../../assets/images/home-bg.jpg"
import {ShowContext} from '../../context/ShowContext';
import {AlertContext} from '../../context/AlertContext';

import Alert from '../Alert';

const Search = (props) => {

    const {loading, searchShow} = useContext(ShowContext);
    const {alert, setAlert} = useContext(AlertContext);

    useEffect(() => {
        if(props.location.search && props.location.search.includes("key")) {
            let key = props.location.search.split("=")[1];
            if(key && key.includes("&")) {
                key = key.split("&")[0];
            }
            if(key) {
                key = decodeURIComponent(key);
                setSearchTerm(key);
                searchShow(key);
            }
        }
    }, []);

    const [searchTerm, setSearchTerm] = useState("");

    const searchFormHandler = (e) => {
        e.preventDefault();  
        if(searchTerm.trim()) {
            searchShow(searchTerm);
            props.history.replace(`/search?key=${searchTerm}`)
        } else {
            setAlert("search bar must not be empty", "danger")
        }
    }

    const classesStyleHandler = 
        props.size === "large"
            ? "col-2-4 mx-auto mh-100 search-content"
            : "col-2-4 mx-auto pt-6 pb-2 search-content"

    return (
        <section className="search" style={{background: `url(${Homebg})`}}>
            <div className="container">
                <div className="row">
                    <div className={classesStyleHandler}>
                        {props.size==="large" ?
                        <>
                            <h1>Find your next show</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin finibus urna, vitae tincidunt lacus.</p>
                        </> : null
                        }
                    
                    

                        <form className="search-form" onSubmit={searchFormHandler}>
                            <input type="search" placeholder="Search for TV shows" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? "Loading" : "Search"}
                            </button>
                        </form>
                        {alert && <Alert type={alert.type} message={alert.message}/>}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(Search)
