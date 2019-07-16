export class FileInput extends Component {
	onChange() {

		//если несколько файлов то возвращаем просто FileList
		if(this.props.multiple){
			let result = this.refs['input'].files;
	        this.props.onChange(this.props.field, result, this.props);
	        return;
		}

		let value = this.refs['input'].files[0];
		if (value) {
			let FR = new FileReader();
		    FR.onload = ( (e) => {
				let result=this.props.btoa?btoa(e.target.result):e.target.result;
		        this.props.onChange(this.props.field, result, this.props);
		    });
		 	
		 	if (this.props.binary) {
		    	FR.readAsBinaryString(value);
		 	} else {
		    	FR.readAsText(value);
		 	}
		}
	}

	render () {
		let {inProgress, text, multiple,  ...props}=this.props
		return <div className="file-upload">
			<ProgressButton inProgress={inProgress} icon='fa fa-download' type='button' > {text}</ProgressButton>
		    <input disabled={inProgress} ref='input' type="file" onChange={this.onChange.bind(this)} multiple={multiple}/>
		</div>
	}
}
