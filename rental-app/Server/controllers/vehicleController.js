import Vehicle from "../models/Vehicle.js";

/* ✅ ADD VEHICLE */
export const addVehicle = async (req, res) => {
  try {
    const { name, category, rentPerDay } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    const vehicle = new Vehicle({
      name,
      category,
      rentPerDay,
      image: req.file.filename, // ✅ correct
    });

    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/* ✅ GET ALL VEHICLES */
export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ✅ DELETE VEHICLE */
export const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    await Vehicle.findByIdAndDelete(id);
    res.status(200).json({ message: "Vehicle deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
