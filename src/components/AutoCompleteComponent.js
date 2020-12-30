import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./autocomplete.css";
export default function AutoCompleteComponent({ languages }) {
	return (
		<Container maxWidth='sm'>
			<div className='marginBottom'>
				<Autocomplete
					multiple
					id='tags-outlined'
					options={languages}
					getOptionLabel={(option) => option.name}
					style={{ width: 500 }}
					renderInput={(params) => (
						<TextField
							{...params}
							variant='outlined'
							label='Select Your Language'
							placeholder='Get Your Favorite Language..'
						/>
					)}
				/>
			</div>
		</Container>
	);
}
