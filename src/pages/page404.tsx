import "../css/page404.css"

const PageNotFound = () => {
    return (<div id="page-not-found">
        <h1>
            Page  
            not <br/> 
            found
        </h1>

        <ul>
            <li>
                try more later
            </li>
            
            <li>
                reload the page
            </li>
            
            <li>
                report the problem <a href="" target="_blank" id="link">here</a>
            </li>
        </ul>

        <h2>status 404</h2>
    </div>)
}

export default PageNotFound