function Card({props}){
    return(
        <div>
            <div class="card mb-3" style={{maxWidth:"540px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h4>product id {props.id}</h4>
                        <h5 class="card-title">product name {props.name}</h5>
                        <p class="card-text">price {props.price}</p>
                        <p class="card-text">rating:{props.rating.rate} overall:{props.rating.total}</p>
                        <p class="card-text"><small class="text-body-secondary">catagory:{props.catogory}</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card