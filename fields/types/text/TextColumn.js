import React from 'react';
import ItemsTableCell from '../../components/ItemsTableCell';
import ItemsTableValue from '../../components/ItemsTableValue';

var TextColumn = React.createClass({
	displayName: 'TextColumn',
	propTypes: {
		col: React.PropTypes.object,
		data: React.PropTypes.object,
		linkTo: React.PropTypes.string,
	},
	getValue () {
		// cropping text is important for textarea, which uses this column
		const value = this.props.data.fields[this.props.col.path];

		if (this.props.col.path == 'photo1url' || this.props.col.path == 'photo2url') {
			if (value) {
				const src = `http://iccie.ifnotalk.com/images/pic/${value}.jpg`;
				return (
					<div>
						<img src={src} width="100%" />
					</div>
				)
			}
		}

		return value ? value.substr(0, 100) : null;
	},
	render () {
		const value = this.getValue();
		const empty = !value && this.props.linkTo ? true : false;
		const className = this.props.col.field.monospace ? 'ItemList__value--monospace' : undefined;
		return (
			<ItemsTableCell>
				<ItemsTableValue className={className} to={this.props.linkTo} empty={empty} padded interior field={this.props.col.type}>
					{value}
				</ItemsTableValue>
			</ItemsTableCell>
		);
	},
});

module.exports = TextColumn;
