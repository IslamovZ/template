import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';


export default class DataImport extends Component {
	constructor(props) {
		super(props);
		this.getFiles=this.getFiles.bind(this);
		this.loadFiles=this.loadFiles.bind(this);

		this.state={
			syncInProgress: false,
			importInProgress: false,
		}
	}


	async getFiles(files){
		this.setState({importInProgress: true});
		console.log(this.state.importInProgress)

		for(let i=0; i<files.length; i++){
			let file = files[i];
			console.log('file')
			console.log(file)
		}
		this.setState({importInProgress: false});

	};

	async loadFiles(data){
		console.log('data')
		console.log(data)
	};




	readUploadedFileAsText(inputFile){
    	const temporaryFileReader = new FileReader();
    	return new Promise((resolve, reject) => {
      		temporaryFileReader.onload = () => {
        		resolve(btoa(temporaryFileReader.result));
	      	};
	      	temporaryFileReader.readAsBinaryString(inputFile);
    	});
  	};
	

	render() {
		if (!this.props.users||this.props.users.fetch) return null
		return <FileInput type='button' inProgress={this.state.importInProgress}  onChange={(file, result) => this.getFiles(result)} btoa={true} binary={true} multiple={true} text='Выбрать файлы'/>

	}
}