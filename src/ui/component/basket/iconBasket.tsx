import React from 'react';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../state/store";

const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }),
)(Badge);

export const CustomizedBadges = () => {

    let counterFood = useSelector<AppStateType, number>(state => state.order.counterFood)

    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={counterFood} color="secondary">
                <ShoppingCartIcon style={{ color: '#EA7C69'}} />
            </StyledBadge>
        </IconButton>
    );
}