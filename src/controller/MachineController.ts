import Machine from "../model/Machine";

class MachineController {
    public setMachineRecord = async (data: string) => {
        const {payload} = JSON.parse(data);
        const machine = new Machine(payload);

        try {
            const savedMachine = await machine.save();
            console.log(savedMachine);
        } catch (error) {
            throw error;
        }
    };

    public getMachineRecord = async (req:any, res: any) => {
        const {params:{machine_id}} = req;

        if(!machine_id) {
            res.status(400);
            return res.json({error: `Machine Id is missing from the request url`})
        }

        try {
            const records = await Machine.find({machine_id});
            res.status(200);
            return res.json({
                data: records
            });
        } catch (err) {
            res.status(500);
            return res.json({error: `Internal server error!`});
        }
    }

}

export const machineController = new MachineController();