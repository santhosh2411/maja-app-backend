import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';

export type UserCreationAttributes = Optional<User, 'bio' | 'email'>;

export class UserModel extends Model<User, UserCreationAttributes> implements User {
  public id: number;
  public name: string;
  public dob: Date;
  public bio: string;
  public mobileNo: string;
  public email: string;
  public isActive: boolean;
  public password: string;
  
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        
      },
      name:{
        type:DataTypes.STRING(255),
        allowNull:false
      },
      dob:{
        type:DataTypes.DATE,
        allowNull:true
      },
      bio:{
        type:DataTypes.STRING(255),
        allowNull:true
      },
      mobileNo:{
        type:DataTypes.STRING(255),
        allowNull:false,
        field:'mobileNo'
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      isActive:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        field:'isActive'
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field:'createdAt'
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field:'updatedAt'
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return UserModel;
}
