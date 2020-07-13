class Input extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}className='mx-auto'style={{'width': '100%'}}>
                <div className='form-group row ml-0' >
                    <label htmlfor='item'>Name of item</label>
                    <div class="col-sm-10">
                        <input type='text' class='form-control' id='item' />
                    </div>
                </div>

                <div className='form-group row ml-0'>
                    <label htmlfor='brand'>Brand</label>
                    <div class="col-sm-10">
                        <input type='text' class='form-control' id='brand' />
                    </div>
                </div>

                <div className='form-group row ml-0'>
                    <label htmlfor='quantity'>Quantity</label>
                    <div class="col-sm-10">
                        <input type='number' class='form-control' id='quantity' />
                    </div>
                </div>

                <div className='form-group row ml-0'>
                    <label htmlfor='units'>Units</label>
                    <div class="col-sm-10">
                    <select id='units' class='form-control' name='units'>
                        <option value='grams'>grams</option>
                        <option value='pkts'>pkts</option>
                        <option value='qty'>qty</option>
                        <option value='litres'>litres</option>
                    </select>
                    </div>
                </div>

                <div className='form-group row ml-0'>
                    <label htmlfor='note'>Note</label>
                    <div class="col-sm-10">
                    <textarea id='note exampleFormControlTextarea1' class="form-control" rows="3" name='note' placeholder='take note'></textarea>
                    </div>
                </div>
                <button type='submit' class='btn btn-primary'>Add</button>
            </form>
        )
    }
}