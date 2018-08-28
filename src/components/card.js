import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardHeader} from 'material-ui/Card';

const CardComponent = (user) => {
   let githubUser = user.user;
    return(
        <div>
            <Card>
                <CardHeader
                    title={githubUser.name}
                    actAsExpander
                />
            {
                Object.keys(githubUser).map((key, value)=> 
                    <div key={key}>
                        <CardText expandable>
                            {`${key}: ${githubUser[key]}`}
                        </CardText>
                    </div>
                )
            }  
            </Card> 
        </div>
    );
};
CardComponent.propTypes= {
    user: PropTypes.array.isRequired,
};

export default CardComponent;
