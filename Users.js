const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
      {
            nama: String,
            email: { type: String, unique: true },
            npm: String,
            password: String
      },
      {
            collection: "Users"
      }
);

mongoose.model("Users", UserSchema);


const ScheduleSchema = new mongoose.Schema(
      {
        
        tgl: { type: Date },
        kategori: {
          type: String,
          enum: ['food','rent','utilities','transportation','others'],
        },
        amount: { Number },
      },
      {
        collection: "Schedules",
      }
    );

mongoose.model("Schedules", ScheduleSchema);