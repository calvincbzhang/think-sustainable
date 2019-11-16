
import java.util.*;

public class Determine {
  public static void main (String[] args){

    Dictionary<String, Double> info = new Hashtable<String, Double>();
    // Inserting values into the Dictionary
    info.put("Age", 22.0);
    info.put("Happiness", 0.2);
    info.put("Surprise", 0.5);
    info.put("Neutral", 0.6);
    info.put("Digust", 0.73);
    info.put("Sadness", 0.12);
    info.put("Anger", 0.32);
    info.put("Contempt", 0.43);
    info.put("Fear", 0.54);

    calculateHappy(info);
    calculateNeutral(info);
    calulateSad(info);
  } // main

  public static double calculateHappy(Dictionary<String, Double> info){
    //TODO
  } // calculateHappy

  public static double calculateNeutral(Dictionary<String, Double> info){
    //TODO
  } // calculateHappy
  public static double calculateSad(Dictionary<String, Double> info){
    //TODO
  } // calculateHappy
} // Determine
