import { Accident } from "../model/Accident.Model.js";


// Create Accident
export const createAccident = async (req, res) => {

    console.log("Create Accident Controller");
     console.log(req.body);
  console.log(req.user);


  try {

    const {
      title,
      location,
      description,
      image,
      severity,
    } = req.body;

    const newAccident = await Accident.create({
      title,
      location,
      description,
      image,
      severity,
      createdBy: req.user.id,
    });

    return res.status(201).json({
      success: true,
      message: "Accident Reported Successfully",
      accident: newAccident,
    });

  } catch (error) {
      console.log(error);


    return res.status(500).json({
      success: false,
      message: "Error While Creating Accident",
    });

  }

};


// Get All Accidents
export const getAllAccidents = async (req, res) => {

  try {

    const accidents = await Accident.find()
      .populate("createdBy", "name email");

    return res.status(200).json({
      success: true,
      accidents,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Error While Fetching Accidents",
    });

  }

};


// Delete Accident 
export const deleteAccident = async (req, res) => {

  try {

    const { id } = req.params;

    await Accident.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Accident Deleted Successfully",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Error While Deleting Accident",
    });

  }

};


// Update Accident
export const updateAccident = async (req, res) => {

  try {

    const { id } = req.params;

    const updatedAccident =
      await Accident.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );

    return res.status(200).json({
      success: true,
      message: "Accident Updated Successfully",
      accident: updatedAccident,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Error While Updating Accident",
    });

  }

};


export const getSingleAccident = async (req, res) => {

  try {

    const accident = await Accident.findById(req.params.id);

    return res.status(200).json({
      success: true,
      accident,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Error While Fetching Accident",
    });

  }

};