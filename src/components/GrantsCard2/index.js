import React from "react";

function GrantsCard2 () {
    return (
        <div className = "row">
        <div className="col s1 m3">
            <div class="card teal lighten-2">
                <div className = "card-image"> 
             {/* <h2 className="header">Home Repair </h2> */}
            {/* <div className="card horizontal"> */}
                {/* <div className="card-image"> */}
                <img src="https://tse2.mm.bing.net/th?id=OIP.G7N-Q8p8bpODtPOuKxrEXAHaDf&pid=Api&P=0&w=347&h=166" alt="fall" />
                 <span class = "card-title black-text bold">Home Repair </span>
                 {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
                 </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                    <div className="card-action">
                        <a href="https://drive.google.com/file/d/1KCCTyYqQdzCqjmdpA4R9yy6CaeqyDyZk/view?usp=sharing">Apply Now!</a>
                    </div>
                </div>
                {/* </div> */}
            </div> 
            </div>
    );
}
export default GrantsCard2;