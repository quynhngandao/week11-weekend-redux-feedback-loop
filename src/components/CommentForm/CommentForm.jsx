import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom/";

// Material UI imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

// start component Function
export default function CommentForm() {
  // options for input form
  const ratings = [1, 2, 3, 4, 5];
  const storeCommentValue = useSelector(store => store.survey.comment);
  const dispatch = useDispatch();
  const history = useHistory()

  // local state to track input selection
  const [commentValue, setCommentValue] = useState("");
  // form validation state
  const [isEmpty, setIsEmpty] = useState(false);

  // update selected value, handle form validation condition
  const handleChange = event => {
    setCommentValue(event.target.value);
    setIsEmpty(false);
  };

  // useEffect to load saved state from store
  useEffect(() => {
    setCommentValue(storeCommentValue);
  }, []);

  // handleClickNext function
  const handleClickNext = event => {
    console.log("next clicked! Value is:", commentValue);
    // validate form input
    if (!commentValue) {
      setIsEmpty(true);
    } else {
      // Dispatch to reducer
      dispatch({
        type: 'COMMENT',
        payload: commentValue
      })
      // move to next page
      history.push('/review')

    }
    // console.log("isEmpty is", isEmpty);
  };

  // TODO - handleClickBack function
  const handleClickBack = () => {
    history.push('/supported')
  }
  return (
    <>
      <Box
        component="form"
        sx={{
          textAlign: "center",
          width: "fit-content",
          margin: "auto",
        }}
        noValidate
        autoComplete="off"
      >
        <h3>Any comments you want to leave?</h3>
        <div>
          <TextField
            required
            id="feeling-input"
            select
            label="Select"
            defaultValue=""
            value={commentValue}
            onChange={handleChange}
            sx={{ textAlign: "center", width: 175 }}
            helperText={
              isEmpty ? "please submit a value." : "please add a value"
            }
            error={isEmpty}
          >
            {ratings.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="form-btn-container">
          <IconButton aria-label="next" onClick={handleClickBack}>
            <ArrowBackIcon />
          </IconButton>

          {/* <Button size="large">Home</Button> */}

          <IconButton aria-label="next" onClick={handleClickNext}>
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </Box>
    </>
  );
}
