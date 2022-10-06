const CustomError = require("../helpers/CustomError");
const Coin = require("../models/Coin");

const getCoins = async(req,res)=>{
  try {
    const coins = await Coin.find();
    res.status(200).json({coins});
  } catch (error) {
    res.status(error.code || 500).json({message:error.message});
  }
}
const getCoin = async(req,res)=>{
  try {
    const {id} = req.params;
    const coin = await Coin.findById(id);
    res.status(200).json({coin});
  } catch (error) {
    res.status(error.code || 500).json({message:error.message});
  }
}
const addCoin = async(req,res)=>{
  try {
    const newCoin = new Coin(req.body);
    const coinSaved = await newCoin.save();
    if(!coinSaved) throw new CustomError('Error al guardar la cripto', 404);
    res.status(200).json({message:'Cripto guardada con éxito'});
  } catch (error) {
    res.status(error.code || 500).json({message:error.message});
  }
}

const deleteCoin = async(req,res)=>{
  try {
    const {id} = req.body;
    const coinToRemove = await Coin.findById(id);
    if(!coinToRemove) throw new CustomError('No existe la cripto solicitada',404)
    await Coin.findByIdAndDelete(id);
    res.status(200).json({message:'Cripto eliminada con éxito'});
  } catch (error) {
    res.status(error.code || 500).json({message:error.message});
  }
}
const editCoin = async(req,res)=>{
  try {
    const {id} = req.params;
    const {update} = req.body;
    const coinToEdit = await Coin.findById(id);
    if(!coinToEdit) throw new CustomError('No existe la cripto solicitada',404)
    await Coin.findByIdAndUpdate(id,update);
    res.status(200).json({message:'Cripto actualizada con éxito'});
  } catch (error) {
    res.status(error.code || 500).json({message:error.message});
  }
}


module.exports = {
  getCoins,
  addCoin,
  deleteCoin,
  getCoin,
  editCoin
}