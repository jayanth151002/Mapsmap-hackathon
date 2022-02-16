class Title_Model():
    def __init__(self,model_path=r'F:\WorkSpace\Projects\Mapsmap-hackathon\ml\Final_Model\bert',
                 weights_path=r'F:\WorkSpace\Projects\Mapsmap-hackathon\ml\Final_Model\Title_model.h5',
                 preprocess_path=r'.\ml\Final_Model\Preprocess',n_labels=674):
        import keras
        import tensorflow_hub as hub
        import tensorflow as tf
        import tensorflow_text
        import numpy as np
        from joblib import load
        import os
    
        self.np = np
        preprocessor = hub.KerasLayer(hub.load(preprocess_path))
        encoder = hub.KerasLayer(hub.load(model_path),trainable=True)
        text_input = keras.layers.Input(shape=(), dtype=tf.string)
        
        encoder_inputs = preprocessor(text_input)
        outputs = encoder(encoder_inputs)

        pooled_output = outputs["pooled_output"]

        x = keras.layers.Dense(256)(pooled_output)
        x = keras.layers.Dropout(0.2)(x)
        out = keras.layers.Dense(674,activation='sigmoid')(x)
        
        self.model = keras.Model(text_input,out)
        self.model.load_weights(weights_path)
        self.mlb = load(os.path.join(preprocess_path,'Title_mlb.joblib'))
        self.n_labels = n_labels
        
    def return_model(self):
        return self.model
    
    def decode(self,X,n='all'):
        keys = list(self.mlb.inverse_transform(self.np.ones(self.n_labels).reshape(1,-1))[0])
        ret = []
        if n=='all':
            n = self.n_labels
        for values in X:
            mappings = dict(zip(keys,values))
            ret.append(sorted(keys,key=lambda x:-mappings[x])[:n])
        return ret
    
    def predict(self,X,n='all'):
        if type(X)==str:
            X = [X]
        p = self.model.predict(X)
        return self.decode(p,n)
    def get_all_prob(self,X):
        if type(X)==str:
            X = [X]
        p = self.model.predict(X)
        keys = list(self.mlb.inverse_transform(self.np.ones(self.n_labels).reshape(1,-1))[0])
        mappings = []
        for values in p:
            mappings.append(dict(zip(keys,values)))
        return mappings

model = Title_Model()
print(model.predict("Why do we need food?",9))