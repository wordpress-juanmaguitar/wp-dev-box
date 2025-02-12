import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import {
	RangeControl,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';

import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps( {
		className: 'property-cpt-md-details__details',
	} );

	// Determine the curent post type in the editor context
	const currentPostType = useSelect( ( select ) => {
		return select( 'core/editor' ).getCurrentPostType();
	}, [] );

	// Fetch the meta as an object and the setMeta function
	const [ meta, setMeta ] = useEntityProp(
		'postType',
		currentPostType,
		'meta'
	);

	// Destructure all our individual properties from the meta for ease of use
	const { bedrooms, bathrooms, price, squareFootage } = meta;

	const updateMeta = ( key, value ) => {
		setMeta( { ...meta, [ key ]: value } );
	};

	return (
		<div { ...blockProps }>
			<h4>Property Details:</h4>
			<hr />
			<div className="property-cpt-md-details__grid">
				<RangeControl
					label={ __( 'Bedrooms' ) }
					value={ bedrooms }
					onChange={ ( nextValue ) =>
						updateMeta( 'bedrooms', nextValue )
					}
					min={ 0 }
					max={ 10 }
					step={ 1 }
				/>
				<RangeControl
					label="Bathrooms"
					value={ bathrooms }
					onChange={ ( nextValue ) =>
						updateMeta( 'bathrooms', nextValue )
					}
					min={ 0 }
					max={ 10 }
					step={ 0.5 } // Half baths
				/>
				<InputControl
					prefix="$"
					type="number"
					label="Price"
					value={ price }
					onChange={ ( nextValue ) =>
						updateMeta( 'price', nextValue )
					}
				/>
				<InputControl
					type="number"
					label="Square Footage"
					value={ squareFootage }
					onChange={ ( nextValue ) =>
						updateMeta( 'squareFootage', nextValue )
					}
				/>
			</div>
		</div>
	);
}
